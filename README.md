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

1. Corrected the field wrapper layout using the exact Figma values.
2. Set the shared single-field wrapper to 360px fill, 73px hug, vertical flow, and 5px gap.
3. Set the mobile and age row to a horizontal 360px fill wrapper with an 8px gap.
4. Applied the correct 22px trailing icon sizes for the name and email fields.
5. Reused shared field UI only where the visual structure truly matched.
