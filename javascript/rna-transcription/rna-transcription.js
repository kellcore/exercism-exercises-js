//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const conversion = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = (dna) => {
  // replace dna values with complimenting rna values
  // G -> C, C -> G, T -> A, A -> U
  return dna.split('').map(nucleotide => conversion[nucleotide]).join('');
};
