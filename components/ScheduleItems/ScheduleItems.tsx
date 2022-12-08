function ScheduleItems({ time, activity, id }) {
  return (
    <li key={id} className=''>
      <p>
        {time}:&nbsp;<span className='font-bold'>&nbsp; {activity}</span>
      </p>
    </li>
  );
}

export default ScheduleItems;
