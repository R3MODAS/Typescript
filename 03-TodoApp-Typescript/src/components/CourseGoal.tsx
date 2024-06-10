//! Receiving Props and defining the types of props
// interface CourseGoalProps {
//   title: string;
//   description: string;
// }

// const CourseGoal = ({ title, description }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

//! Two ways to receive props with children
// import { type PropsWithChildren } from "react";

//TODO: 1st way
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

//TODO: 2nd way
// type CourseGoalProps = PropsWithChildren<{ title: string }>;
// const CourseGoal = ({ title, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

//! Another way of setting types for components
// import { type FC, type PropsWithChildren } from "react";
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

//! Approach we will use
import { type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{ title: string }>;
const CourseGoal = ({ title, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
