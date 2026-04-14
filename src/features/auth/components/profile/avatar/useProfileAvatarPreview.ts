import { useEffect, useRef, useState } from "react";

type UseProfileAvatarPreviewParams = {
  onAvatarChange: (avatar: File | null) => void;
};

export type AvatarPreviewState = {
  file: File;
  previewUrl: string;
};

const useProfileAvatarPreview = ({
  onAvatarChange,
}: UseProfileAvatarPreviewParams) => {
  const previewUrlRef = useRef<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<AvatarPreviewState | null>(
    null,
  );

  const revokeCurrentPreviewUrl = () => {
    if (!previewUrlRef.current) return;
    URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = null;
  };

  useEffect(() => {
    return () => revokeCurrentPreviewUrl();
  }, []);

  const setAvatarFile = (file: File) => {
    const nextPreviewUrl = URL.createObjectURL(file);
    revokeCurrentPreviewUrl();
    previewUrlRef.current = nextPreviewUrl;
    setAvatarPreview({ file, previewUrl: nextPreviewUrl });
    onAvatarChange(file);
  };

  const syncEmptySelection = () => {
    if (!avatarPreview) onAvatarChange(null);
  };

  return { avatarPreview, setAvatarFile, syncEmptySelection };
};

export default useProfileAvatarPreview;
