const testSections = ['About', 'Portfolio', 'Skills', 'Other Work', 'Contact']

export default function Test() {
  return (
    <div>
      {testSections.map((sect) => (
        <div style={{height: '100vh'}} id={sect}>
          <p>{sect}</p>
        </div>
      ))}
    </div>
  );
}
