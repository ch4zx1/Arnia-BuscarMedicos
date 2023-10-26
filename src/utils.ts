export function formatPhoneNumber(phoneNumber: string): string {
  const numericOnly: string = phoneNumber.replace(/\D/g, "");
  const hasElevenDigits: boolean = numericOnly.length === 11;

  const formattedNumber: string = hasElevenDigits
    ? `${numericOnly.substring(0, 2)} ${numericOnly.substring(
        2,
        3
      )}${numericOnly.substring(3, 7)}-${numericOnly.substring(7, 11)}`
    : `${numericOnly.substring(0, 2)} ${numericOnly.substring(
        2,
        6
      )}-${numericOnly.substring(6, 10)}`;

  return formattedNumber;
}

export function formatProfileName(profileName: string): string {
  const capitalized = profileName
    .toLowerCase()
    .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase());

  if (capitalized === "Medico") {
    return "Médico";
  }

  return capitalized;
}
