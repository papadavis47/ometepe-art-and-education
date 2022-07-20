// Add context here - when I have the spanish text

function BioParagraph({ text, id }) {
  return (
    <div className='my-3' key={id}>
      <p className='font-serif text-xl leading-relaxed md:leading-10 sm:text-2xl'>{text}</p>
    </div>
  );
}

export default BioParagraph;
