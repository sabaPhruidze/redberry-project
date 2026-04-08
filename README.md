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

## Sign Up Step 1 UI Block

1. Created src/features/auth/components/AuthSignUpStepOneSection.tsx.
2. Added the email field, Next button, and footer actions.
3. Kept this step focused on UI only.

## Auth Modal Scroll Lock

1. Created src/hooks/use-lock-body-scroll.ts.
2. Added reusable body scroll lock logic for modal state.
3. Connected it to LoginModal.

## Sign Up Step Transition (1 -> 2)

1. Added local currentStep: 1 | 2 | 3 state inside LoginModal.
2. Connected Step 1 Next to open Step 2 in the same modal.
3. Added back navigation from Step 2 to Step 1.
4. Added Step 2 fields and updated step indicator state.

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
