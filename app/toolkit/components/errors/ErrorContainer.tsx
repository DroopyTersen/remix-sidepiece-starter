import { MdErrorOutline } from "react-icons/md";
export const ErrorContainer = ({
  title = "",
  children = undefined,
  className = "",
}: ErrorContainerProps) => {
  return (
    <div
      className={
        "flex flex-col rounded items-center p-4 bg-red-50 border-red-100 border " + className
      }
    >
      <div className="text-red-800">
        <MdErrorOutline size={45} />
      </div>
      {title && <h3 className="my-2 text-2xl text-gray-700">{title}</h3>}
      {children}
    </div>
  );
};

export interface ErrorContainerProps {
  /** The primary error message to display */
  title: string;
  /** Additional error details */
  children?: React.ReactNode;
  /** The icon name */
  icon?: string;
  className?: string;
}
