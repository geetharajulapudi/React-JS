function Progress({ index, questionsCount, points, maxPoints, answer }) {
  return (
    <div>
      <header className="progress">
        <progress max = {questionsCount} value = {index + Number(answer !==null)} />
        <p>
          Questions<strong> {index + 1}</strong>/{questionsCount}
        </p>
        <p>
          <strong>{points }</strong>/ {maxPoints} points
        </p>
      </header>
    </div>
  );
}

export default Progress;
