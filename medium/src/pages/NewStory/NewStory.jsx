export default function NewStory() {
  return (
    <div>
      <form>
        <label htmlFor="title">
          Tittle
          <input type="text" name="title" className="border-2" />
        </label>
        <label htmlFor="body">
          Body
          <input type="text" name="body" className="border-2" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
