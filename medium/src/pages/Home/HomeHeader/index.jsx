import TagHeaderFollow from "../../../components/TagHeaderFollow";

export default function HomeHeader() {
  return (
    <div className="flex border-b-[1px] overflow-hidden mx-6">
      <button>
        <div className="pb-4 mr-8">
          <svg width="19" height="19" className="align-bottom">
            <path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z" fillRule="evenodd"></path>
          </svg>
        </div>
      </button>
      <a className="pb-4 mr-8" href="/">
        ForYou
      </a>
      <a className="pb-4 mr-8 min-w-max" href="/following">
        Following
      </a>
      <TagHeaderFollow />
    </div>
  );
}
