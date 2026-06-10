import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getData, searchNewsData } from "../Services/apiService";
import toast from "react-hot-toast";

export default function DashboardPage() {
    const navigate = useNavigate();

    interface newsDataType {
        urlToImage: string | null;
        title: string;
        source: {
            id: string | null;
            name: string;
        };
        author: string | null;
        publishedAt: string;
        description: string | null;
        content: string | null;
        url: string;
    }

    const categories = [
        { id: "technology", label: "Technology" },
        { id: "business", label: "Business" },
        { id: "sports", label: "Sports" },
        { id: "science", label: "Science" },
        { id: "health", label: "Health" },
        { id: "entertainment", label: "Entertainment" }
    ];

    const [newsAllData, setNewsAllData] = useState<newsDataType[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const [searchNews, setSearchNews] = useState("");
    const [activeCategory, setActiveCategory] = useState("technology");

    const fetchNewsByCategory = async function (category: string) {
        setLoader(true);
        const data = await getData(category);

        if (data && data.status === "ok") {
            setNewsAllData(data.articles || []);
        } else {
            toast.error("Failed to fetch news articles");
        }
        setLoader(false);
    };

    const searchNewsArticles = async function (query: string) {
        setLoader(true);
        const searchedData = await searchNewsData(query);

        if (searchedData && searchedData.status === "ok") {
            setNewsAllData(searchedData.articles || []);
        } else {
            toast.error("Failed to search news articles");
        }
        setLoader(false);
    };

    // Live search debounce and category switcher
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchNews.trim() !== "") {
                searchNewsArticles(searchNews);
            } else {
                fetchNewsByCategory(activeCategory);
            }
        }, 400);

        return () => clearTimeout(delayDebounceFn);
    }, [searchNews, activeCategory]);

    // Store news articles to sessionStorage whenever list changes
    useEffect(() => {
        if (newsAllData && newsAllData.length > 0) {
            sessionStorage.setItem("newsArticles", JSON.stringify(newsAllData));
        }
    }, [newsAllData]);

    return (
        <div className="min-h-screen bg-[#f4f5f7] font-sans antialiased text-gray-900">

            {/* Top Trending Bar - BizNews Style */}
            <div className="bg-[#111111] text-white text-xs py-2 px-4 border-b border-gray-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="bg-red-600 px-2 py-0.5 font-bold uppercase tracking-wider text-[10px]">Trending</span>
                        <span className="text-gray-400 truncate max-w-xs md:max-w-xl animate-pulse">
                            {newsAllData[0]?.title || "Welcome to BizNews Premium Portal"}
                        </span>
                    </div>
                    <div className="hidden md:block text-gray-400 font-medium">
                        Wednesday, June 10, 2026
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

                {/* Main Header Component */}
                <header className="bg-white border border-gray-200 p-6 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between shadow-sm">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-gray-900 uppercase cursor-pointer" onClick={() => { setSearchNews(""); setActiveCategory("technology"); }}>
                            BIZ<span className="text-red-600">NEWS</span>
                        </h1>
                        <p className="text-xs text-gray-500 font-medium tracking-widest uppercase mt-1">Realtime Business & Global Updates</p>
                    </div>

                    {/* Search Field Area (Live Search) */}
                    <div className="flex items-center w-full sm:max-w-md border border-gray-300 rounded-none overflow-hidden focus-within:border-red-600 transition-colors">
                        <input
                            type="text"
                            name="search"
                            value={searchNews}
                            onChange={(e => setSearchNews(e.target.value))}
                            placeholder="Type keyword for live search..."
                            className="w-full px-4 py-2.5 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                        />
                        <div className="bg-gray-100 border-l border-gray-200 text-gray-500 px-4 py-2.5 flex items-center justify-center shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                            </svg>
                        </div>
                    </div>
                </header>

                {/* Category Filtering Tabs */}
                <div className="bg-white border border-gray-200 p-4 mb-6 shadow-sm flex flex-wrap gap-2 items-center">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mr-2">Category Filter:</span>
                    {categories.map((cat) => {
                        const isSelected = activeCategory === cat.id && searchNews.trim() === "";
                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setSearchNews(""); // Clear search to load the category
                                }}
                                className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 transition-all duration-200 cursor-pointer ${
                                    isSelected
                                        ? "bg-red-600 text-white shadow-sm"
                                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                }`}
                            >
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Section Title Divider Line */}
                <div className="flex items-center justify-between border-b-2 border-gray-200 mb-6">
                    <h2 className="bg-[#111111] text-white text-sm font-bold uppercase tracking-wider px-4 py-2">
                        {searchNews.trim() !== "" ? `Search Results: "${searchNews}"` : `${activeCategory} Articles`}
                    </h2>
                    <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {/* Loading Component */}
                {loader && (
                    <div className="flex justify-center items-center py-24 bg-white border border-gray-200 shadow-sm">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-red-600 border-t-transparent"></div>
                        <span className="ml-3 text-sm font-bold uppercase tracking-wider text-gray-600">Loading Feed...</span>
                    </div>
                )}

                {/* No Articles Found */}
                {!loader && newsAllData.length === 0 && (
                    <div className="text-center py-24 bg-white border border-gray-200 shadow-sm p-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-300 mx-auto mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No articles found</h3>
                        <p className="text-xs text-gray-500 max-w-sm mx-auto">Try refining your search keyword or selecting a different category from the filters above.</p>
                    </div>
                )}

                {/* BizNews Layout Grid System */}
                {!loader && newsAllData.length > 0 && (
                    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {newsAllData.map((data, idx) => {
                            return (
                                <article
                                    key={idx}
                                    onClick={() => navigate(`/news/${idx}`)}
                                    className="bg-white border border-gray-200 flex flex-col shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                                >
                                    {/* Image Wrapper */}
                                    <figure className="h-44 w-full bg-gray-100 overflow-hidden relative">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            src={data.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600"}
                                            alt={data.title}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600";
                                            }}
                                        />
                                    </figure>

                                    {/* News Meta Information & Content */}
                                    <div className="p-4 flex flex-col flex-1">

                                        {/* Red Label Badge */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] bg-red-600 text-white font-bold uppercase px-2 py-0.5">
                                                {data.source?.name || "News"}
                                            </span>
                                            <time dateTime={data.publishedAt} className="text-[11px] text-gray-400 font-semibold">
                                                {data.publishedAt ? new Date(data.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : ""}
                                            </time>
                                        </div>

                                        {/* Bold Title Block */}
                                        <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors duration-150 leading-snug">
                                            {data.title}
                                        </h3>

                                        {/* Article Snippet Description */}
                                        <p className="text-gray-600 text-xs line-clamp-3 mb-4 flex-1 leading-relaxed">
                                            {data.description || "No content overview available. Click full link to read complete coverage from official portal source."}
                                        </p>

                                        {/* Author Footer Profile */}
                                        <footer className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
                                            <p className="truncate max-w-[150px] text-gray-500">
                                                By <span className="group-hover:text-red-600 transition-colors uppercase text-[10px]">{data.author || "Staff"}</span>
                                            </p>
                                            <span className="text-red-600 text-[10px] uppercase font-bold group-hover:underline flex items-center gap-0.5">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-2.5 h-2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </span>
                                        </footer>

                                    </div>
                                </article>
                            );
                        })}
                    </main>
                )}

            </div>
        </div>
    );
}