export const updateObject = (oldList, updatedProperties) => {
    return {
        ...oldList,
        ...updatedProperties
    };
};
