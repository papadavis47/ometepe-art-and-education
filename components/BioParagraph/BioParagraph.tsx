// Add context here - when I have the spanish text
export type BioContent = {
  text: string;
  key: number;
};

function BioParagraph({ text, key }: BioContent) {
  return (
    <p
      className='my-3 font-serif text-xl leading-relaxed text-white md:leading-10 sm:text-2xl'
      key={key}
    >
      {text}
    </p>
  );
}

export default BioParagraph;
