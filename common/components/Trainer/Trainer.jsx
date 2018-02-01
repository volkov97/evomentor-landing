import React from 'react';
import { I18n } from 'react-redux-i18n';

import Icon from '../Icon/Icon';

import {
    Wrap,
    Trainer,
    TrainerSectionHeader,
    TrainerHeader,
    TrainerText,
    TrainerList,
    TrainerOne,
    TrainerOneIcon,
    TrainerOneContent,
    TrainerOneTitle,
    TrainerOneText,
    AndMore,
} from './Trainer.styled';

export default (props) =>
    <Wrap>
        <Trainer>
            <TrainerSectionHeader>
                <TrainerHeader>{I18n.t('Trainer::title')}</TrainerHeader>
                <TrainerText>{I18n.t('Trainer::text-one')}</TrainerText>
                <TrainerText>{I18n.t('Trainer::text-two')}</TrainerText>
            </TrainerSectionHeader>
            <TrainerList>
                {[
                    { icon: 'account', title: 'Trainer::clean-design', text: 'Trainer::clean-design-text' },
                    { icon: 'clients', title: 'Trainer::fast-search', text: 'Trainer::fast-search-text' },
                    { icon: 'library', title: 'Trainer::informative-profiles', text: 'Trainer::informative-profiles-text' },
                    { icon: 'analitics', title: 'Trainer::favourites', text: 'Trainer::favourites-text' },
                    { icon: 'chat', title: 'Trainer::stars', text: 'Trainer::stars-text' },
                ].map((trainer, index) => (
                    <TrainerOne key={index}>
                        <TrainerOneIcon><Icon type={trainer.icon} /></TrainerOneIcon>
                        <TrainerOneContent>
                            <TrainerOneTitle>{I18n.t(trainer.title)}</TrainerOneTitle>
                            <TrainerOneText>{I18n.t(trainer.text)}</TrainerOneText>
                        </TrainerOneContent>
                    </TrainerOne>
                ))}
                <AndMore>{I18n.t('Trainer::and-more')}</AndMore>
            </TrainerList>
        </Trainer>
    </Wrap>
