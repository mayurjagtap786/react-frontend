import { NavLink } from "react-router-dom";

function ReleaseList({
  releases,
  loading,
  error,
}) {
  if (loading) {
    return (
      <div className="p-4">
        <span className="loading loading-spinner loading-md" />
        <span className="ml-2">Loading releases...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error m-3">
        <span>{error}</span>
      </div>
    );
  }

  if (!releases || releases.length === 0) {
    return (
      <div className="p-4 text-base-content/60">
        No releases found.
      </div>
    );
  }

  return (
    <div>
      <div className="p-4 text-lg font-semibold border-b border-base-300">
        Releases
      </div>

      <ul className="menu p-2 w-full">

        {releases.map((release) => {

          const releaseNumber =
            typeof release === "string"
              ? release
              : release.releaseNumber;

          return (
            <li key={releaseNumber}>
              <NavLink
                to={`/releases/${encodeURIComponent(
                  releaseNumber
                )}`}
              >
                <span>◉</span>
                {releaseNumber}
              </NavLink>
            </li>
          );
        })}

      </ul>
    </div>
  );
}

export default ReleaseList;