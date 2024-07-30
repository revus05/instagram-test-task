import Checkbox from '../../../../shared/ui/Checkbox/Checkbox.tsx'
import * as Tooltip from '@radix-ui/react-tooltip'

type Props = {
	accountSuggestions: boolean
	setAccountSuggestions: (accountSuggestions: boolean) => void
}

const EditAccountSuggestions = ({ accountSuggestions, setAccountSuggestions }: Props) => {
	return (
		<div className={'flex mt-4 pt-1.5'}>
			<div className={'w-[194px] flex justify-end'}>
				<p className={'font-semibold text-end leading-[18px]'}>
					Show account
					<br />
					suggestions on
					<br /> profiles
				</p>
			</div>
			<div className={'w-[325px] ml-8'}>
				<Checkbox
					label={
						<span>
							Choose whether people can see similar account suggestions on your profile, and whether your
							account can be suggested on other profiles.{' '}
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger asChild>
										<span className={'text-primary'}>[?]</span>
									</Tooltip.Trigger>
									<Tooltip.Portal>
										<Tooltip.Content
											className={
												'bg-white shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] py-1.5 px-2.5 rounded-[3px]'
											}
											sideOffset={5}
										>
											Something I want to say
											<Tooltip.Arrow className={'fill-white'} />
										</Tooltip.Content>
									</Tooltip.Portal>
								</Tooltip.Root>
							</Tooltip.Provider>
						</span>
					}
					checked={accountSuggestions}
					onChange={e => setAccountSuggestions(e.target.checked)}
				/>
			</div>
		</div>
	)
}

export default EditAccountSuggestions
