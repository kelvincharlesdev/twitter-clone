import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Logo } from "../ui/logo"
import { faHouse, faXmark } from "@fortawesome/free-solid-svg-icons"
import { SearchInput } from "../ui/search-input"
import { NavItem } from "../nav/nav-item"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { NavLogout } from "../nav/nav-logout"

interface HomeMenuProps {
    closeAction: () => void
}

export const HomeMenu = ({ closeAction }: HomeMenuProps) => {
    return (
        <div className="lg:hidden fixed inset-0 p-6 bg-black">
            <div className="flex justify-between items-center">
                <Logo size={32} />

                <div onClick={closeAction} className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-gray-900">
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>

            <div className="my-6">
                <SearchInput />
            </div>

            <div>
                <NavItem
                    label="Página inicial"
                    href="/home"
                    icon={faHouse}
                />
                <NavItem
                    label="Meu perfil"
                    href="/profile"
                    icon={faUser}
                />

                <NavLogout/>
            </div>
        </div>
    )
}