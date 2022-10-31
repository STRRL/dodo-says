import RoostSelector from "components/RoostSelector";

const RoostLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <div className='flex px-8 py-2'>
                <div className="h-full px-2">
                    <RoostSelector />
                </div>
                <section className='flex-1 p-2'>
                    {children}
                </section>
            </div>
        </div>
    )
}

export default RoostLayout
