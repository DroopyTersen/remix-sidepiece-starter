export default function Index() {
  return (
    <div>
      <h1 className="text-gray-200">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <div>
        <form className="max-w-xs">
          <fieldset className="flex gap-4 flex-col">
            <label className="flex flex-col gap-1">
              <span className="label-text">First Name</span>
              <input
                type="text"
                className="input w-full input-accent border-none bg-neutral/70"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="label-text">Last Name</span>
              <input
                type="text"
                className="input w-full input-accent border-none bg-neutral/70"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="label-text">Job</span>
              <select className="select select-accent border-none bg-neutral/70 w-full">
                <option></option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Product Manager</option>
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="label-text">Bio</span>
              <textarea className="textarea w-full max-w-xs textarea-accent border-none bg-neutral/70"></textarea>
            </label>

            <div className="flex gap-2 justify-end">
              <button className="btn">Cancel</button>
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
