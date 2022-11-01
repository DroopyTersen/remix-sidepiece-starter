import { useEnvVars } from "~/toolkit/remix/useEnvVar";

export default function Index() {
  let config = useEnvVars();
  return (
    <div>
      <h1 className="text-secondary/90">{config?.PUBLIC_MESSAGE}</h1>
      <p>You are on the {config.PUBLIC_ENV} environment</p>
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
                className="input w-full input-accent border-none bg-base-200/80"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="label-text">Last Name</span>
              <input
                type="text"
                className="input w-full input-accent border-none bg-base-200/80"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="label-text">Job</span>
              <select className="select select-accent border-none bg-base-200/80 w-full">
                <option></option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Product Manager</option>
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="label-text">Bio</span>
              <textarea className="textarea w-full max-w-xs textarea-accent border-none bg-base-200/80"></textarea>
            </label>

            <div className="flex gap-2 justify-end">
              <button className="btn btn-ghost">Cancel</button>
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
