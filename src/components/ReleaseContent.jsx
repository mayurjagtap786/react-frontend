function ReleaseContent({
  release,
  loading,
  error,
}) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <span className="loading loading-spinner loading-lg" />

        <p className="mt-3 text-base-content/60">
          Loading release details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center p-8">
        <div className="alert alert-error max-w-xl">
          <div>
            <h3 className="font-bold">
              Unable to load release
            </h3>

            <div>{error}</div>
          </div>
        </div>
      </div>
    );
  }

  if (!release) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-2xl font-semibold">
          Select a release
        </h2>

        <p className="mt-2 text-base-content/60">
          Select a release from the left panel
          to view its details.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">

      <div className="mb-6">
        <div className="text-sm text-base-content/60 uppercase">
          Release
        </div>

        <h1 className="text-3xl font-bold">
          {release.releaseNumber}
        </h1>
      </div>

      <div className="card bg-base-100 shadow-sm border border-base-300">

        <div className="card-body">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <div className="text-sm text-base-content/60">
                Release Number
              </div>

              <div className="font-semibold mt-1">
                {release.releaseNumber}
              </div>
            </div>


            <div>
              <div className="text-sm text-base-content/60">
                Release Date
              </div>

              <div className="font-semibold mt-1">
                {release.releaseDate || "-"}
              </div>
            </div>


            <div>
              <div className="text-sm text-base-content/60">
                Components
              </div>

              <div className="font-semibold mt-1">
                {release.components ?? "-"}
              </div>
            </div>

          </div>


          <div className="divider" />


          <div>
            <div className="text-sm text-base-content/60">
              Description
            </div>

            <p className="mt-2">
              {release.description || "-"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ReleaseContent;