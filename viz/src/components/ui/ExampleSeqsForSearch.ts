import { AminoAcidSequence } from "@/utils";

export const EXAMPLE_SEQS_FOR_SEARCH: { [key: string]: AminoAcidSequence } = {
  // @ts-expect-error I know this is a protein sequence
  "WD40 domain":
    "MADTSDLTNYVLPASPNWYCSTGTDFSITGLYGFAAKKCVYLLDVNGPVPAFRGQFTEHTDRVSSVRFCPHALHPGLCASGADDKTVRLWDVETKGVLANHTTHTAKVTSISWSPQVKDLILSADEKGTVIAWYYNKNTVHSTCPIQEYIFCVESSSVSSQQAAVGGELLLWDLSTPSPKDKVHVFGSGHSRIVFNVSCTPCGTKLMTTSMDRQVILWDVARCQQICTIATLGGYVYAMAISPLDPGTLALGVGDNMIRVWHTTSESAPYDAISLWQGIKSKVMMLAGVADKVKFGFLDATFRHDRHLCPGEMAGHMRYHPTREIDLS",
  // @ts-expect-error I know this is a protein sequence
  Kinase:
    "RFSPQPYNYCCTMANFHIEKKIGRGQFSEVYKATYLLDGQLVALKKVQIFEMMDAKARQDCIKEIDLLKQLNHPNVIKYLDSFIEENELNIVLELADAGDLSQMIKYFKKKRRLIPERTIWKYFVQLCSALEHMHSRRVMHRGKQLHFAFLPCTPHLHCHHYADVITNLLQGQ",
  // @ts-expect-error I know this is a protein sequence
  "SH3 domain": "TAGKIFRAMYDYMAADADEVSFKDGDAIINVQAIDEGWMYGTVQRTGRTGMLPANYVEAI",
};
