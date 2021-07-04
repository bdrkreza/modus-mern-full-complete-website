/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
        name: 'Jane Cooper',
    },
    {
        name: 'Jane Cooper',
    },
    {
        name: 'Jane Cooper',
    },
    {
        name: 'Jane Cooper',
    },
    {
        name: 'Jane Cooper',
    },
    {
        name: 'Jane Cooper',
    },
    {
        name: 'Jane Cooper',
    },
    {
        name: 'Jane Cooper',
    },
    {
        name: 'Jane Cooper',
    },
]

export default function SkeletonTable() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 animate-pulse">
                            <thead className="bg-gray-50">
                                <tr className="animate-pulse">
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider animate-pulse"
                                    >
                                        Product
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Title
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="">action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {people.map((person) => (
                                    <>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 ">
                                                        <div class="rounded-full bg-blue-100 h-12 w-12"></div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div class="rounded-full bg-blue-100 h-4 w-20"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-1 py-1 whitespace-nowrap">
                                                <div class="h-4 bg-blue-100 rounded w-3/4"></div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div class="h-4 bg-blue-100 rounded w-5/6"></div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div class="h-4 bg-blue-100 rounded w-5/6"></div>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
