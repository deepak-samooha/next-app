import { getAllCustomers } from '../lib/customers'

export default function Home({allCustomers}) {
  return (
    <div className='container'>
      
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b dark:bg-gray-700 dark:border-gray-700">
                {Object.keys(allCustomers[0]).map((item) => 
                <th key={`head-${item}`} className="px-6 py-4">{item}</th>
                )}
            </tr>
        </thead>
        <tbody>
          {allCustomers.map((item, idx) => 
          <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {Object.keys(item).map((col) => <td key={`col-${col}-${idx}`} className="px-6 py-4">{item[col]}</td>)}
          </tr>
          )}
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export const getStaticProps = async () => {
  const allCustomers = await getAllCustomers()
  return {
    props: {
      allCustomers
    }
  }
}
