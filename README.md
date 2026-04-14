## Start

1. connected to github.
2. cleaned the project with additional files and code.
3. installed tailwind for style.
4. installed react-router-dom.
5. Created Home page and added as Route ,also added \* which means all routes that are not written will be forwarded to / this path
6. added lazy/loading for faster first retrieve. page will display through Loader before all data retrieved and than will display landing page

   stacks: react.js, typescript, tailwind

## Home page

1. retrieved images and icons for home page
2. Created Main layout which consists Header,main part and footer
3. tailwind.config.ts added for saving oftenly used colors
4. build Header correctly for not authorized case
5. added more colors in tailwind.config.ts and finished header part for unauthorized case
6. build hero Section and added button ui component
7. started startLearning component and card needs to be added
8. installed axios and tanstack query since It will need CRUD methods to be used and added necessary folders and files for using them (currently for card's data fetching in home page).
9. displayed fetched data in StartLearning so currently it displays correctly. Since index 2 data avgRating was null I made it zero and adjusted also starts with the next logic if avgRating is null than empty start (it will not be yellow) else if it is less than or is same as 4 than half star and if it is above 4 than full start (fully yellow).Hope this is what the goal was .
10. building continue Learning section and blarred it. First fetch data using Tanstack query and axios and than will display it but since currently it is not authentificated I will display this case .
11. added in progress courses endpoint hook types and simple continue learning section rendering than imported it on ContinueLearning component and it returns GET https://api.redclass.redberryinternship.ge/api/courses/in-progress 401 (Unauthorized). Also Imported necessary icons for footer as well and built part of it's design in advance .
12. I build a mock "continue learning" with 3 cards .than blarred it and added log in suggestion component
13. footer is finished as well and by this Home Page visual part done .Moving forward I will start logic part from now on
14. Added real routes for `/courses/catalog` and `/courses/:id`, plus a dedicated Not Found page instead of redirecting every unknown route to `/`.
15. Wired course details flow from cards so users can actually reach course detail pages.
16. Continue Learning now keeps showing for authenticated users with empty enrollments and displays the required empty state text with a Browse Courses action.
17. `See All` in Continue Learning and `Enrolled Courses` in the authenticated header now open the enrolled courses modal flow (guest users are redirected to login through protected action logic).
18. Enrolled courses modal now has an empty state, enrolled list, summary, total price, and a non-browser confirmation UI for complete enrollment action.
19. Hero section is now a 3-slide carousel with slide-based text, background image, indicators, and arrow states.

## Auth Modal Header Block

1. Created src/features/auth/components/AuthModalHeader.tsx.
2. Added a reusable header component with title and subtitle props.
3. Inserted the current sign up header content.

## Sign Up Step Indicator

1. Created src/features/auth/components/AuthStepIndicator.tsx.
2. Added a 3-step progress indicator for the sign up flow.
3. Prepared spacing for the next section below it.
4. adjusted sign up modal top content spacing
5. fixed create account header and step indicator sizes

## Sign Up Step 1 UI Block

1. Created src/features/auth/components/AuthSignUpStepOneSection.tsx.
2. Added the email field, Next button, and footer actions.
3. Kept this step focused on UI only.
4. adjusted sign up modal footer layout to match figma
5. aligned divider row and login action row

## Auth Modal Scroll Lock

1. Created src/hooks/use-lock-body-scroll.ts.
2. Added reusable body scroll lock logic for modal state.
3. Connected it to LoginModal.

## Sign Up Step Transition (1 -> 2)

1. Added local currentStep: 1 | 2 | 3 state inside LoginModal.
2. Connected Step 1 Next to open Step 2 in the same modal.
3. Added back navigation from Step 2 to Step 1.
4. Added Step 2 fields and updated step indicator state.
5. replaced inline back arrow with provided svg asset
6. kept auth modal back button simple and reusable

## Sign Up Step 2 Exact Variant

1. Kept the sign up flow inside a single modal.
2. Switched only the inner content based on the current step.
3. Preserved the same modal structure while moving between steps.

## Sign Up Step 2 Behavior and Validation

1. Added shared sign up state for email, password, and confirmPassword.
2. Added validation for required fields, minimum length, and password match.
3. Added inline error messages.
4. Added separate password visibility toggle for both fields.
5. Prevented moving to the next step until validation passes.
6. Reset sign up state when the modal is closed.

## Sign Up Step 3 UI Block

1. Added a dedicated Step 3 section component with username input, upload avatar block, Sign Up button, and footer.
2. Fixed Step 3 modal flow rendering so step 3 has its own content and correct back navigation to step 2.
3. Matched Step 3 wrapper/layout structure to Figma spacing: 460 modal with 50 padding, 12 gap, and 360 inner content alignment.
4. Built upload avatar area with existing upload icon asset, centered content, inline upload action, and helper text.
5. Connected sign up to backend `POST /register` using shared axios and TanStack Query mutation.
6. Sign up now sends multipart form data (with optional avatar), stores `access_token` and `auth_user` in localStorage, and closes modal on success.

## Log In

1. Split auth modals: Log In now opens `LoginModal` only, and Sign Up now opens `RegisterModal` with the existing 3-step registration flow.
2. Connected LoginModal to backend login API with TanStack Query mutation, pending button state, and simple inline error message.
3. Login form now uses React Hook Form + Zod schema validation from a separate auth schemas folder.
4. RegisterModal now uses React Hook Form + Zod schema for core validation and real register submit flow.
5. Unified auth input error visuals (label, border, placeholder, helper text in red) for Login and Register, and split modal internals into child components to keep modal files smaller.
6. After Login the visual part of header's right side changes. Also when profile icon is clicked displays modal but currently nothing written inside.
7. Currently no enrolled course wilbe so nothing will be displayed after login . I will get back to this part later after finishing all major parts

## Profile

1. Corrected the upload text styles using the exact Figma values.
2. Applied the main upload row as a centered 14px medium Inter text block.
3. Styled the regular text with Greyscale/500 and the upload link with Purple/600.
4. Added the exact 8px gap between the main upload text and the helper text.
5. Matched the helper text to the 12px regular Inter style and Greyscale/300 color.
6. Reused the existing shared Button component for the profile submit action.
7. Adjusted the button usage to match the Figma width, height, radius, spacing, and purple background.

- Added `profile.schema.ts` with Zod fields for full name, email, mobile number, age, and avatar.
- Added Georgian mobile normalization for validation (spaces are ignored without mutating the original input value).
- Added `normalizeGeorgianMobile` and `isProfileComplete` helpers for profile logic foundation.
- Added `useProfileModalForm` hook with React Hook Form + `zodResolver(profileSchema)` in `onBlur` mode.
- Hook now reads `auth_user` from localStorage for default values with safe empty fallbacks.
- Added logic-only close confirmation and avatar change handler without touching profile modal visuals.
- profile modal now uses react-hook-form.
- profile fields now have real blur validation.
- email is visible but not editable.
- profile completeness now syncs after profile save.
- enroll now is blocked for incomplete profiles.
- incomplete profiles now open the profile modal before enrollment.
- profile feedback states were polished.
- profile indicator now reflects completion state.
- modal close behavior now respects incomplete profile rules.
- Replaced the inline incomplete-profile close prompt with a centered 476x486 feedback dialog, matched the exact Figma spacing, and used the new profile user icon asset.
- Finished the additional turn off modal

## courses/catalog page

1. removed StartLearning component and added breadcrumb
2. Created Filter component and starting building it. I finished building visual part and now it's card time to be built. It's finished and moving forward on a pagination
3.
4. Added typed catalog filter models for categories, topics, and instructors in the shared course types file.
5. Added `/categories`, `/topics`, and `/instructors` API endpoint functions for the catalog filter data.
6. Added TanStack Query hooks for categories, topics, and instructors to prepare the filter sidebar data flow.
7. Connected the new hooks inside the related catalog filter components and logged their states for the first integration step only.
8. Checked and aligned the shared `/courses` catalog response types for the cards and pagination metadata.
9. Connected the catalog courses response to simple console logging in the grid area without changing the current static card UI.
10. Kept the current catalog UI unchanged for now; real rendering and filter behavior will be implemented next.
11. Replaced the static catalog sidebar content with real backend-driven categories, topics, and instructors.
12. Replaced the static catalog course cards with mapped `/courses` data from the API.
13. Connected the catalog results text and pagination UI to the real response metadata.
14. Removed temporary mock catalog content that was previously written by hand.
15. Kept the catalog layout unchanged while making the page use real fetched data.
16. Increased the custom sort dropdown width so `Price: Low to High` and `Price: High to Low` fit cleanly in both trigger and menu.
17. Kept the same custom dropdown behavior and aligned the top row layout so the wider control still stays stable next to the results text.
18. left parts filter works and cards are filtered by categories , mentor and topics

## courses/catalog individual page

1. built visual (left part and right part)
2. Added backend foundation for course detail with new endpoint layer + query hooks for:
   `/courses/{id}`, `/courses/{id}/weekly-schedules`, `/courses/{id}/time-slots`, `/courses/{id}/session-types`.
3. Course detail page now reads route `id`, fetches real detail + weekly schedules, and uses real detail loading/error/not-found states without changing the current UI layout.
4. Connected right-side schedule selection to real backend flow (weekly schedule -> time slot -> session type) with dependent reset logic.
5. Total price card now reacts to real base price + selected session type modifier, and unavailable session types are shown as disabled with seat-status text.
6. Left-side course detail now binds to the exact route course from `GET /courses/{id}` for title, image, description, category/topic text, instructor name, and duration weeks.
7. Time Slot and Session Type cards now visibly render backend values in-place (real labels/times, session names, modifiers, seats, and location text).
8. Unavailable options now stay visible but use disabled UI colors across weekly schedule, time slot, and session type cards.
9. Right-side detail sections (Weekly Schedule, Time Slot, Session Type) now support independent open/close accordion behavior with smooth arrow/content animation, while keeping the same backend-driven selections and reset logic.
10. Breadcrumb receives relevant category and display's it on the head of the left part also when home or browse clicked it will move on relevant page
11. implementing enrollment backend GET/POST/PATCH/DELETE
12. Now implemented post on enroll now button but Currently I will write only static text and after creating the design I retrieve data through GET method
13. retrieves data correctly and dispays it
14. correctly added the rating block and retake button for the completed state.
15. After Enroll Now succeeds, the right panel switches from the schedule selection flow to the enrolled state and shows the selected weekly schedule, time slot, session type, optional location, and backend-driven progress in the existing design.
16. After Complete Course succeeds and the backend progress becomes 100, the same panel switches to the completed state and shows the Completed badge, full progress, the Retake Course action, and the one-time rating section.
17. When retake is clicked it get's back on the stage of "enroll now" and if it is again clicked do the same process. Also rating is only one time. (retake => delete)
18. adding 3 modal (congratulations, conflict ,confirmed)

## IMPORTANT CHANGES

1. refactored pages => home => components and added 3 folder
2. refactored pages => courses => components and added 3 folder and sub folders as well

## Enrolled courses

1. Enrolled Courses modal now uses a dedicated Framer Motion right-sidebar shell (overlay fade + slide-in/out), with an empty panel body . I will built currently
   only for visual part emtpy case.
2.
