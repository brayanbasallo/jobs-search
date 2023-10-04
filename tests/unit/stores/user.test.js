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
});