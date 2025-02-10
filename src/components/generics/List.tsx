type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number; first: string; last: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => onClick(item)}>
          {item.first} {item.last}
        </div>
      ))}
    </div>
  );
};
