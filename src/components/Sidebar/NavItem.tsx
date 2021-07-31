type NavItemProps = {
  name: string;
};

export function NavItem({ name }: NavItemProps) {
  return (
    <li className="my-px relative bg-black rounded-lg">
      <a
        href="/"
        className="flex h-10 px-3 text-grey items-center rounded-lg shadow hover:bg-teal"
      >
        <span className="flex px-4 my-4">{name}</span>
      </a>
      <span className="absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 bg-teal"></span>
    </li>
  );
}
