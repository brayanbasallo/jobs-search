import { createPinia, setActivePinia } from "pinia";
import { useUserStore } from "@/stores/user";


describe("State", () => {
    beforeEach(() => {
        const pinia = createPinia();
        setActivePinia(pinia);
    });
    it("Keeps track of it user is logged in", () => {
        const store = useUserStore();
        expect(store.isLoggedIn).toBe(false);
    });

    it("stores organizations that the user would like to filter jobs by", () => {
        const store = useUserStore();
        expect(store.selectedOrganizations).toEqual([]);
    })
});

describe("Actions", () => {
    beforeEach(() => {
        const pinia = createPinia();
        setActivePinia(pinia);
    });
    describe("loginUser", () => {
        it("logs the user in", () => {
            const store = useUserStore();
            store.loginUser();
            expect(store.isLoggedIn).toBe(true);
        });
        it("logs the user out", () => {
            const store = useUserStore();
            store.logoutUser();
            expect(store.isLoggedIn).toBe(false);
        });
    });

describe("ADD_SELECTED_ORGANIZATION", () => {
    it("updates organizations the user has chosen to filter jobs by", () => {
        const store = useUserStore();
        store.ADD_SELECTED_ORGANIZATION(["Org 1", "Org 2"]);
        expect(store.selectedOrganizations).toEqual(["Org 1", "Org 2"]);
    });
});
});