import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi2'

const ButtonProfilePlan = (props) => {
  const { id, title, expiration } = props;

  return (
    <Link
      to={`/plan/${id}`}
      className="flex justify-between bg-gray-600 w-full text-white p-3 mb-2">
      <div>
        <p className="font-bold text-3xl">{ title }</p>
        <p>{ expiration }</p>
      </div>
      <div>
        <HiChevronRight />
      </div>
    </Link>
  )
}

export default ButtonProfilePlan;
