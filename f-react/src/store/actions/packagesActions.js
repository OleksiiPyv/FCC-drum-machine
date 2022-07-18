import axios from "axios";
import { loading, loaded, error } from "../slices/packagesSlice";
import { open } from "../slices/modalSlice";

export const fetchPackages = () => {
    return async (dispatch) => {
        try {
            dispatch(loading());

            const res = await axios({
                method: "get",
                url: "https://data.jsdelivr.com/v1/stats/packages?=10",
            });

            dispatch(loaded({ 
                all: res.data,
                show: res.data,
            }));

        } catch (e) {
            dispatch(error(e));
        }
    };
};

export const fetchPackage = (pack) => {
    return async (dispatch) => {
        try {
            axios({
                method: "get",
                url: `https://data.jsdelivr.com/v1/package/${pack.type}/${pack.name}`,
            }).then((res) => {
                dispatch(
                    open({
                        name: pack.name,
                        type: pack.type,
                        hits: pack.hits,
                        tags: res.data.tags,
                    })
                );
            });
        } catch (e) {
            //TODO
        }
    };
};
