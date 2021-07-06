const testSections = ['About', 'Portfolio', 'Skills', 'Other Work', 'Contact']

export default function Placeholder() {
  return (
    <div>
      {testSections.map((sect) => (
        <div key={sect} style={{height: '100vh'}} id={sect}>
          <p>{sect}</p>
        </div>
      ))}
    </div>
  );
}
