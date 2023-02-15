// Add context here - when I have the spanish text
export type BioContent = {
  text: string;
  key: number;
};

function BioParagraph({ text, key }: BioContent) {
  return (
    <p className='my-3 text-xl text-white' key={key}>
      {text}
    </p>
  );
}

export default BioParagraph;
