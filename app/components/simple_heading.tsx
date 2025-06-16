export default function SimpleHeading({ text }: { text: string }) {
    return (
        <div className="text-center mb-8">
            <h2 className={`inline-block font-bold text-3xl p-8 sm:text-4xl tracking-widest border-b-2 border-gray-300 pb-2 `}>
                {text}
            </h2>
        </div>
    );
}