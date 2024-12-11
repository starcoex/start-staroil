const mapping = {
  p: "leading-relaxed text-lg mb-6",
  blockquote: "border-l-4 border-green-500 text-center pl-5 italic",
  h2: "title-font text-white font-semibold mb-6 text-3xl",
  h3: "title-font text-white font-semibold mb-6 text-2xl",
  h4: "title-font text-white font-semibold mb-6 text-2xl",
  h5: "title-font text-white font-semibold mb-6 text-xl",
  a: "text-white",
  em: "font-thin text-white text-lg leading-relaxed",
  ul: "mb-6",
  li: "mb-6 ml-5 text-lg",
};

export const options = {
  replace: (node) => {
    const className = mapping[node.name];
    if (className) {
      node.attribs.className = className;
      return node;
    }
  },
  trim: true,
};
