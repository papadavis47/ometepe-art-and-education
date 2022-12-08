// Add context here - when I have the spanish text
type BioContent = {
  text: string;
  id: number;
};

function BioParagraph({ text, id }: BioContent) {
  return (
    <p
      className='my-3 font-serif text-xl leading-relaxed text-white md:leading-10 sm:text-2xl'
      key={id}
    >
      {text}
    </p>
  );
}

export default BioParagraph;
