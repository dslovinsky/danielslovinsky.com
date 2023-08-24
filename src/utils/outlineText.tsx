const outlineText = (heading: string) => {
  if (!heading) {
    return;
  }
  const outlinedArray = heading.split('__').map((segment, index) => {
    if (index % 2 === 1) {
      return (
        <span key={segment} className="text-stroke-2 text-stroke-maya-blue text-transparent">
          {segment}
        </span>
      );
    }

    return segment;
  });

  return outlinedArray;
};

export default outlineText;
