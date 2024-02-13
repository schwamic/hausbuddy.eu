export default function Card({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`flex grow items-center justify-center space-x-2 shadow-lg shadow-gray-400 rounded-3xl p-7 sm:p-10 leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}
