export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get_count' : IDL.Func([], [IDL.Nat], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
