const objAds = {
  items: [
    {
      id: 0,
      url:
        "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Landscape photo of 2-story house",
    },
    {
      id: 1,
      url:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTQyOTd8MHwxfHNlYXJjaHwxfHxob3VzZXxlbnwwfHx8fDE2MTU3MDE4NTQ&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Gray wooden house",
    },
    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTQyOTd8MHwxfHNlYXJjaHw5fHxob3VzZXxlbnwwfHx8fDE2MTU3MDE4NTQ&ixlib=rb-1.2.1&q=80&w=1080",
      description: "White wooden house near green trees during daytime",
    },
  ],
};
const Ad = () => {
  return objAds.items.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.url} className="ad" alt={item.description} />
        <div className="ad-description">{item.description}</div>
      </div>
    );
  });
};

export default Ad;
