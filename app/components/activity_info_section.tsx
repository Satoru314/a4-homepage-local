import SimpleHeading from "./simple_heading";

export default function ActivityInfoSection() {
    return (
        <>
            <SimpleHeading text="活動情報" />

            {/* 活動日程セクション */}
            <div className="w-full mx-auto px-4 mb-16 max-w-6xl">
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">定期活動</h4>
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded">
                                    <span className="font-medium mb-1 sm:mb-0">全体ミーティング</span>
                                    <span className="text-gray-600 text-sm sm:text-base">毎週水曜日 17:00-19:00</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded">
                                    <span className="font-medium mb-1 sm:mb-0">部署別作業会</span>
                                    <span className="text-gray-600 text-sm sm:text-base">隔週で実施</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">今後の予定</h4>
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-green-50 rounded">
                                    <span className="font-medium mb-1 sm:mb-0">夏合宿</span>
                                    <span className="text-gray-600 text-sm sm:text-base">8月予定</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-yellow-50 rounded">
                                    <span className="font-medium mb-1 sm:mb-0">六甲祭出展</span>
                                    <span className="text-gray-600 text-sm sm:text-base">10月予定</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-blue-50 rounded">
                                    <span className="font-medium mb-1 sm:mb-0">新歓イベント</span>
                                    <span className="text-gray-600 text-sm sm:text-base">4月予定</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 地図セクション */}
            {/* <div className="w-full mx-auto px-4 mb-16 max-w-6xl">
                <div className="mt-8 sm:mt-12 md:mt-16 w-full flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
                    <div className="w-full md:w-1/2 h-64 md:h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204.94774605679828!2d135.2340499!3d34.7262619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008c1099500001%3A0x98e427ff38944988!2z5a2m6KGT44O755Sj5qWt44Kk44OO44OZ44O844K344On44Oz5Ym16YCg5pys6YOo!5e0!3m2!1sen!2sjp!4v1749961311795!5m2!1sen!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of the location"
                        ></iframe>
                    </div>
                    <div className="w-full md:w-1/2 p-6 sm:p-8 bg-gray-100 flex flex-col justify-center">
                        <p className="text-gray-700 text-base sm:text-lg md:text-xl font-medium  leading-relaxed">全体ミーティングを学術・産業イノベーション創造本部のダイセルOIホールで行っています。</p>
                    </div>
                </div>
            </div> */}
        </>
    );
}
