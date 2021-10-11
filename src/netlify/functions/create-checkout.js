exports.handler = async ({ body }) => {
  const { data } = JSON.parse(body);

  return {
    statusCode: 200,
    body: JSON.stringify({ sku, quantity }),
  };
};