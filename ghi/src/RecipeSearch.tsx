import { Autocomplete, Option } from "chakra-ui-simple-autocomplete";
import { Box } from "@chakra-ui/react";
import React from "react";

const options = [
  { value: "javascript", label: "Javascript" },
  { value: "chakra", label: "Chakra" },
  { value: "react", label: "React" },
  { value: "css", label: "CSS" },
  { value: "eggs", label: "Eggs Benedict" },
];

const AutocompleteWrapper = () => {
  const [result, setResult] = React.useState<Option[]>([]);

  return (
    <Box maxW="md">
      <Autocomplete
        options={options}
        result={result}
        setResult={(options: Option[]) => setResult(options)}
        placeholder="Autocomplete"
      />
    </Box>
  );
};

export default AutocompleteWrapper;
