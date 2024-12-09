export default function GrammarExample({ example }) {
    return (
      <li className="mb-4">
        <p>
          <strong>English:</strong> {example.english}
        </p>
        <p>
          <strong>Tiếng Việt:</strong> {example.vietnamese}
        </p>
      </li>
    );
  }
  