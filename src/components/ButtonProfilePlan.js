import { HiChevronRight } from 'react-icons/hi2'

const ButtonProfilePlan = (props) => {
  const { title, expiration } = props;

  return (
    <div className="flex justify-between bg-gray-600 w-full text-white p-3 mb-2">
      <div>
        <p className="font-bold text-3xl">{ title }</p>
        <p>{ expiration }</p>
      </div>
      <div>
        <HiChevronRight />
      </div>
    </div>
  )
}

export default ButtonProfilePlan;
