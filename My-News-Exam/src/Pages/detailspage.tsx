import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

type Article = {
    title: string;
    description: string | null;
    content: string | null;
    author: string | null;
    publishedAt: string;
    urlToImage: string | null;
    source: { name: string };
    url: string;
};

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        if (!id) return;

        const stored = sessionStorage.getItem("newsArticles");
        if (!stored) return;

        try {
            const parsed = JSON.parse(stored) as Article[];
            const numericId = Number(id);
            if (!isNaN(numericId) && parsed[numericId]) {
                setArticle(parsed[numericId]);
            }
        } catch (error) {
            console.error("Failed to load article", error);
        }
    }, [id]);

    const formatDate = (value: string) => {
        if (!value) return "N/A";
        return new Date(value).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    if (!article) {
        return (
            <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-center items-center p-6 text-center">
                <div className="bg-white border border-gray-200 p-8 max-w-md w-full shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
                    <p className="text-gray-500 mb-6">The article you are looking for might have been cleared or does not exist.</p>
                    <button 
                        onClick={() => navigate("/")} 
                        className="w-full bg-[#111111] hover:bg-red-600 text-white font-bold uppercase tracking-wider text-xs py-3 px-6 transition-all duration-200"
                    >
                        Back to Home Feed
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f4f5f7] font-sans antialiased text-gray-900 pb-16">
            {/* Top Bar / Sticky Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-all duration-200">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button 
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 group text-gray-600 hover:text-red-600 font-bold uppercase tracking-wider text-xs transition-colors"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="currentColor" 
                            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Feed
                    </button>
                    <div className="text-right">
                        <span className="text-xs font-black tracking-tight text-gray-900 uppercase">
                            BIZ<span className="text-red-600">NEWS</span>
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-4xl mx-auto px-4 mt-8">
                <article className="bg-white border border-gray-200 shadow-sm p-6 md:p-10">
                    
                    {/* Source & Date Info */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="text-xs bg-red-600 text-white font-bold uppercase px-3 py-1 tracking-wider shadow-sm">
                            {article.source?.name || "News Report"}
                        </span>
                        <time className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            {formatDate(article.publishedAt)}
                        </time>
                    </div>

                    {/* Headline */}
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                        {article.title}
                    </h1>

                    {/* Author Section */}
                    <div className="flex items-center gap-2.5 pb-6 border-b border-gray-100 mb-8 text-xs text-gray-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <span>By <strong className="text-gray-900 uppercase tracking-wide">{article.author || "Staff Writer"}</strong></span>
                    </div>

                    {/* Featured Image */}
                    {article.urlToImage && (
                        <div className="w-full bg-gray-50 overflow-hidden border border-gray-100 shadow-inner mb-8">
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-auto object-cover max-h-[450px]"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                        </div>
                    )}

                    {/* Description (Highlighted Intro) */}
                    {article.description && (
                        <div className="border-l-4 border-red-600 pl-4 py-2 my-6 bg-red-50/40 text-gray-700 italic text-base leading-relaxed md:text-lg">
                            {article.description}
                        </div>
                    )}

                    {/* Detailed Content */}
                    <div className="prose max-w-none text-gray-800 text-sm md:text-base leading-relaxed space-y-4 mb-10">
                        {article.content ? (
                            // NewsAPI often truncates content with "... [x chars]". Let's format it.
                            <p className="whitespace-pre-line">
                                {article.content.replace(/ \[\+\d+ chars\]$/, "")}
                            </p>
                        ) : (
                            <p>Full article content is not directly available. Click below to read the complete coverage on the official publication page.</p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-100">
                        <button
                            onClick={() => window.open(article.url, "_blank", "noopener,noreferrer")}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs py-3.5 px-8 transition-colors cursor-pointer shadow-sm shadow-red-600/20"
                        >
                            Read Full Article
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </button>
                        
                        <button
                            onClick={() => navigate("/")}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold uppercase tracking-wider text-xs py-3.5 px-8 transition-colors cursor-pointer"
                        >
                            Return to Feed
                        </button>
                    </div>

                </article>
            </main>
        </div>
    );
}
