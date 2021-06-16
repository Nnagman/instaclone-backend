import {withFilter} from "apollo-server";
import {NEW_MESSAGE} from "../../constants";
import pubsub from "../../pubsub";

export default {
    subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_MESSAGE),
        ({roomUpdates}, {id}) => {
            return roomUpdates.roomId === id;
        }
    ),
};