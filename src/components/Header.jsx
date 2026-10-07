function Header({ onReleasesClick }) {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <span className="text-xl font-bold">
          Release Management
        </span>
      </div>

      <div>
        <button
          className="btn btn-primary"
          onClick={onReleasesClick}
        >
          Releases
        </button>
      </div>
    </div>
  );
}

export default Header;