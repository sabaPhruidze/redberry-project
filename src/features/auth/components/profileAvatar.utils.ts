import {
  ALLOWED_AVATAR_EXTENSIONS,
  ALLOWED_AVATAR_MIME_TYPES,
} from "./profileAvatar.constants";

export const isAllowedAvatarFile = (file: File) => {
  const mimeType = file.type.toLowerCase();
  if (ALLOWED_AVATAR_MIME_TYPES.has(mimeType)) return true;

  const lowerCaseName = file.name.toLowerCase();
  return ALLOWED_AVATAR_EXTENSIONS.some((extension) =>
    lowerCaseName.endsWith(extension),
  );
};

export const formatAvatarFileSize = (sizeInBytes: number) => {
  const oneMbInBytes = 1024 * 1024;
  if (sizeInBytes < oneMbInBytes) {
    const kb = Math.max(1, Math.round(sizeInBytes / 1024));
    return `Size - ${kb}KB`;
  }

  const mb = sizeInBytes / oneMbInBytes;
  const normalizedMb = mb >= 10 ? Math.round(mb) : Number(mb.toFixed(1));
  return `Size - ${normalizedMb}MB`;
};
