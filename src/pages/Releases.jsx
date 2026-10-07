import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ReleaseList from "../components/ReleaseList";
import ReleaseContent from "../components/ReleaseContent";

import {
  getReleases,
  getRelease,
} from "../services/releaseService";

function Releases() {

  const { releaseNumber } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [releases, setReleases] = useState([]);
  const [releasesLoading, setReleasesLoading] = useState(false);
  const [releasesError, setReleasesError] = useState(null);

  const [release, setRelease] = useState(null);
  const [releaseLoading, setReleaseLoading] = useState(false);
  const [releaseError, setReleaseError] = useState(null);


  const loadReleases = async () => {

    try {

      setReleasesLoading(true);
      setReleasesError(null);

      const data = await getReleases();

      setReleases(data);

    } catch (error) {

      console.error(error);

      setReleasesError(
        "Unable to load releases."
      );

    } finally {

      setReleasesLoading(false);

    }
  };


  const handleReleasesClick = async () => {

    setSidebarOpen(true);

    await loadReleases();
  };


  useEffect(() => {

    if (!releaseNumber) {
      setRelease(null);
      return;
    }

    let cancelled = false;

    const loadRelease = async () => {

      try {

        setReleaseLoading(true);
        setReleaseError(null);

        const data =
          await getRelease(releaseNumber);

        if (!cancelled) {
          setRelease(data);
        }

      } catch (error) {

        console.error(error);

        if (!cancelled) {

          setRelease(null);

          setReleaseError(
            `Unable to load release ${releaseNumber}.`
          );
        }

      } finally {

        if (!cancelled) {
          setReleaseLoading(false);
        }

      }
    };

    loadRelease();

    return () => {
      cancelled = true;
    };

  }, [releaseNumber]);


  return (
    <div className="h-screen flex flex-col bg-base-200">

      <Header
        onReleasesClick={handleReleasesClick}
      />

      <div className="flex flex-1 min-h-0">

        {sidebarOpen && (

          <aside className="w-64 shrink-0 bg-base-100 border-r border-base-300 overflow-y-auto">

            <ReleaseList
              releases={releases}
              loading={releasesLoading}
              error={releasesError}
            />

          </aside>

        )}

        <main className="flex-1 overflow-y-auto p-6 md:p-10">

          <ReleaseContent
            release={release}
            loading={releaseLoading}
            error={releaseError}
          />

        </main>

      </div>

    </div>
  );
}

export default Releases;