define({"oj-message":{fatal:"Неустранимая ошибка",error:"Ошибка ",warning:"Предупреждение",info:"Информация",confirmation:"Подтверждение","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Значение в непредусмотренном формате.",detail:"Введите значение в предусмотренном формате.","plural-separator":", ",hint:{summary:"Пример: {exampleValue}",detail:"Введите значение в таком же формате, как в этом примере: '{exampleValue}'","detail-plural":"Введите значение в таком же формате, как в этих примерах: '{exampleValue}'"},
optionHint:{detail:"Допустимое значение для параметра '{propertyName}': '{propertyValueValid}'.","detail-plural":"Допустимые значения для параметра '{propertyName}': '{propertyValueValid}'."},optionTypesMismatch:{summary:"Если для параметра '{propertyName}' задано значение '{propertyValue}', требуется установить значение для параметра '{requiredPropertyName}'."},optionTypeInvalid:{summary:"Для параметра '{propertyName}' не указано предусмотренное значение."},optionOutOfRange:{summary:"Значение {propertyValue} не входит в диапазон значений для параметра '{propertyName}'."},
optionValueInvalid:{summary:"Для параметра '{propertyName}' указано недопустимое значение '{propertyValue}'."},number:{decimalFormatMismatch:{summary:"Значение '{value}' имеет непредусмотренный числовой формат."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'short' и 'long' не поддерживаются для синтаксического анализа конвертера.",detail:'Изменить компонент на "readOnly". Поля "readOnly" не вызывают функцию синтаксического анализа конвертера.'},currencyFormatMismatch:{summary:"Значение '{value}' имеет непредусмотренный формат валюты."},
percentFormatMismatch:{summary:"Значение '{value}' имеет непредусмотренный формат процента."}},datetime:{datetimeOutOfRange:{summary:"Значение '{value}' не входит в диапазон значений для '{propertyName}'.",detail:"Введите значение в диапазоне от '{minValue}' до '{maxValue}'."},dateFormatMismatch:{summary:"Значение '{value}' имеет непредусмотренный формат даты."},timeFormatMismatch:{summary:"Значение '{value}' имеет непредусмотренный формат времени."},datetimeFormatMismatch:{summary:"Значение '{value}' имеет непредусмотренный формат даты и времени."},
dateToWeekdayMismatch:{summary:"'{date}' не выпадает на день недели '{weekday}'.",detail:"Введите соответствующий дате день недели."}}},"oj-validator":{length:{hint:{min:"Введите не менее {min} симв.",max:"Введите не более {max} симв.",inRange:"Введите не менее {min} символов, макс. значение: {max}.",exact:"Введите {length} симв."},messageDetail:{tooShort:"Введите не менее {min} симв.",tooLong:"Введите не более {max} симв."},messageSummary:{tooShort:"Недостаточное количество символов.",tooLong:"Слишком большое количество символов."}},
range:{number:{hint:{min:"Введите число, которое больше или равно {min}.",max:"Введите число, которое меньше или равно {max}.",inRange:"Введите число от {min} до {max}."},messageDetail:{rangeUnderflow:"Число должно быть больше или равно {min}.",rangeOverflow:"Число должно быть меньше или равно {max}."},messageSummary:{rangeUnderflow:"Число слишком мало.",rangeOverflow:"Слишком большое число."}},datetime:{hint:{min:"Введите дату и время не ранее, чем {min}.",max:"Введите дату и время не позднее, чем {max}.",
inRange:"Введите дату и время в диапазоне от {min} до {max}."},messageDetail:{rangeUnderflow:"Дата и время должны быть позднее, чем {min}.",rangeOverflow:"Дата и время должны предшествовать {max}."},messageSummary:{rangeUnderflow:"Дата и время более ранние, чем минимальная дата.",rangeOverflow:"Дата и время более поздние, чем максимальная дата."}}},restriction:{date:{messageSummary:"Дата {value} — это отключенная запись.",messageDetail:"Дата {value} не должна быть отключенной записью."}},regExp:{summary:"Неверный формат.",
detail:"Значение '{value}' должно соответствовать этому шаблону: '{pattern}'"},required:{summary:"Требуется задать значение.",detail:"Требуется ввести значение."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Назад",nextText:"Вперед",currentText:"Сегодня",weekHeader:"Нед.",tooltipCalendar:"Выбрать дату",tooltipCalendarDisabled:"Выбор даты недоступен",weekText:"Неделя",datePicker:"Выбор даты",inputHelp:"Нажмите кнопку со стрелкой вниз или вверх, чтобы открыть календарь",
inputHelpBoth:"Нажмите кнопку со стрелкой вниз или вверх, чтобы открыть календарь. Либо нажмите кнопку со стрелкой вниз или вверх, удерживая Shift, чтобы развернуть список времени",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Выбрать время",tooltipTimeDisabled:"Выбор времени недоступен",inputHelp:"Нажмите кнопку со стрелкой вниз или вверх, чтобы развернуть список времени",
dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Значение должно соответствовать следующему шаблону: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Следующая страница",labelAccArrowPreviousPage:"Предыдущая страница",tipArrowNextPage:"Далее",tipArrowPreviousPage:"Назад"},"oj-ojDataGrid":{accessibleSortAscending:"Сортировка {id} по возрастанию",
accessibleSortDescending:"Сортировка {id} по убыванию",accessibleActionableMode:"Войти в режим действий",accessibleNavigationMode:"Войти в режим навигации",accessibleSummaryExact:"Это таблица данных, в которой строк: {rownum}, столбцов: {colnum}",accessibleSummaryEstimate:"Это таблица данных с неизвестным количеством строк и столбцов",accessibleSummaryExpanded:"Развернуто строк: {num}",accessibleRowExpanded:"Строка развернута",accessibleRowCollapsed:"Строка свернута",accessibleRowSelected:"Строка {row} выбрана",
accessibleColumnSelected:"Столбец {column} выбран",accessibleStateSelected:"выбрано",accessibleMultiCellSelected:"Выбрано ячеек: {num}",accessibleRowContext:"Строка {index}",accessibleColumnContext:"Столбец {index}",accessibleRowHeaderContext:"Заголовок строки {index}",accessibleColumnHeaderContext:"Заголовок столбца {index}",accessibleLevelContext:"Уровень {level}",accessibleRangeSelectModeOn:"Режим добавления выбранного диапазона ячеек вкл.",accessibleRangeSelectModeOff:"Режим добавления выбранного диапазона ячеек выкл.",
accessibleFirstRow:"Достигнута первая строка",accessibleLastRow:"Достигнута последняя строка",accessibleFirstColumn:"Достигнут первый столбец",accessibleLastColumn:"Достигнут последний столбец",accessibleSelectionAffordanceTop:"Верхний маркер выделения",accessibleSelectionAffordanceBottom:"Нижний маркер выделения",msgFetchingData:"Выборка данных...",msgNoData:"Нет элементов для отображения.",labelResize:"Изменить размер",labelResizeWidth:"Изменить ширину",labelResizeHeight:"Изменить высоту",labelSortRow:"Сортировать строку",
labelSortRowAsc:"Сортировать строку по возрастанию",labelSortRowDsc:"Сортировать строку по убыванию",labelSortCol:"Сортировать столбец",labelSortColAsc:"Сортировать столбец по возрастанию",labelSortColDsc:"Сортировать столбец по убыванию",labelCut:"Вырезать",labelPaste:"Вставить",labelEnableNonContiguous:"Разрешить выделение, которое не является непрерывным",labelDisableNonContiguous:"Запретить выделение, которое не является непрерывным",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Уровень {level}",
accessibleRowDescription:"Уровень {level}, строка {num} из {total}",accessibleRowExpanded:"Строка развернута",accessibleRowCollapsed:"Строка свернута",accessibleStateExpanded:"развернуто",accessibleStateCollapsed:"свернуто"},"oj-ojListView":{msgFetchingData:"Выборка данных...",msgNoData:"Нет элементов для отображения.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z"},"oj-_ojLabel":{tooltipHelp:"Справка",tooltipRequired:"Требуется"},"oj-ojInputNumber":{numberRange:{hint:{min:"",
max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Уменьшить",tooltipIncrement:"Увеличить"},"oj-ojTable":{labelAccSelectionAffordanceTop:"Верхний маркер выделения",labelAccSelectionAffordanceBottom:"Нижний маркер выделения",labelEnableNonContiguousSelection:"Разрешить выделение, которое не является непрерывным",labelDisableNonContiguousSelection:"Запретить выделение, которое не является непрерывным",labelSelectRow:"Выбрать строку",
labelSelectColumn:"Выбрать столбец",labelSort:"Сортировать",labelSortAsc:"Сортировать по возрастанию",labelSortDsc:"Сортировать по убыванию",msgFetchingData:"Выборка данных...",msgNoData:"Нет данных для отображения."},"oj-ojTabs":{labelCut:"Вырезать",labelPasteBefore:"Вставить перед",labelPasteAfter:"Вставить после",labelRemove:"Удалить",labelReorder:"Изменить порядок",removeCueText:"Удаление разрешено"},"oj-ojSelect":{seachField:"Поле поиска",noMatchesFound:"Совпадение не найдено"},"oj-ojSwitch":{SwitchON:"Вкл.",
SwitchOFF:"Выкл."},"oj-ojCombobox":{noMatchesFound:"Совпадение не найдено"},"oj-ojInputSearch":{noMatchesFound:"Совпадение не найдено"},"oj-ojTree":{stateLoading:"Загрузка...",labelNewNode:"Новый узел",labelMultiSelection:"Множественный выбор",labelEdit:"Изменить",labelCreate:"Создать",labelCut:"Вырезать",labelCopy:"Копировать",labelPaste:"Вставить",labelRemove:"Удалить",labelRename:"Переименовать",labelNoData:"Нет данных"},"oj-ojPagingControl":{labelAccPaging:"Разбивка на страницы",labelAccNavFirstPage:"Первая страница",
labelAccNavLastPage:"Последняя страница",labelAccNavNextPage:"Следующая страница",labelAccNavPreviousPage:"Предыдущая страница",labelAccNavPage:"Страница",labelLoadMore:"Показать еще...",labelLoadMoreMaxRows:"Достигнуто макс. кол-во строк: {maxRows}",labelNavInputPage:"Страница",labelNavInputPageMax:"из {pageMax}",msgItemRangeCurrent:"{pageFrom} – {pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"из",msgItemRangeOfAtLeast:"из, по крайней мере,",msgItemRangeOfApprox:"из примерно",msgItemRangeItems:"элем.",
tipNavInputPage:"Перейти на страницу",tipNavPageLink:"Перейти на страницу {pageNum}",tipNavNextPage:"Далее",tipNavPreviousPage:"Назад",tipNavFirstPage:"Первая",tipNavLastPage:"Последняя",pageInvalid:{summary:"Введенное значение страницы является недопустимым.",detail:"Введите значение больше 0."},maxPageLinksInvalid:{summary:"Недопустимое значение maxPageLinks.",detail:"Введите значение больше 4."}},"oj-ojMasonryLayout":{labelCut:"Вырезать",labelPasteBefore:"Вставить перед",labelPasteAfter:"Вставить после"},
"oj-panel":{labelAccButtonExpand:"Развернуть",labelAccButtonCollapse:"Свернуть",labelAccButtonRemove:"Удалить"},"oj-ojChart":{labelDefaultGroupName:"Группа {0}",labelSeries:"Ряд",labelGroup:"Группа",labelDate:"Дата",labelValue:"Значение",labelTargetValue:"Цель",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Процент",labelLow:"Низкий",labelHigh:"Высокий",labelOpen:"Открыть",labelClose:"Закрыть",labelVolume:"Объем",labelMin:"Мин.",labelMax:"Макс.",labelOther:"Другое",tooltipPan:"Сдвиг",tooltipSelect:"Выбор по выделенной области",
tooltipZoom:"Масштабирование по выделенной области",componentName:"График"},"oj-dvtBaseGauge":{componentName:"Шкала"},"oj-ojDiagram":{componentName:"Диаграмма"},"oj-ojLegend":{componentName:"Обозначения"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Другое",labelGroup:"Группа",labelSize:"Размер",labelAdditionalData:"Дополнительные данные",componentName:"Ячейка 9-блочной матрицы"},"oj-ojPictoChart":{componentName:"Диаграмма с рисунками"},"oj-ojSparkChart":{componentName:"График"},"oj-ojSunburst":{labelColor:"Цвет",
labelSize:"Размер",componentName:"Лучевая"},"oj-ojTagCloud":{componentName:"Облако тегов"},"oj-ojThematicMap":{componentName:"Тематическая карта"},"oj-ojTimeline":{componentName:"Шкала времени",labelSeries:"Ряд",tooltipZoomIn:"Увеличить",tooltipZoomOut:"Уменьшить"},"oj-ojTreemap":{labelColor:"Цвет",labelSize:"Размер",tooltipIsolate:"Изолировать",tooltipRestore:"Восстановить",componentName:"Карта дерева"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"тыс.",labelScalingSuffixMillion:"млн",labelScalingSuffixBillion:"млрд",
labelScalingSuffixTrillion:"трлн",labelScalingSuffixQuadrillion:"квдрлн",labelInvalidData:"Недопустимые данные",labelNoData:"Нет данных для отображения",labelClearSelection:"Отменить выбор",labelDataVisualization:"Визуализация данных",stateSelected:"Выбрано",stateUnselected:"Не выбрано",stateMaximized:"Максимизировано",stateMinimized:"Минимизировано",stateExpanded:"Развернуто",stateCollapsed:"Свернуто",stateIsolated:"Изолировано",stateHidden:"Скрыто",stateVisible:"Отображается",stateDrillable:"С возможностью детализации",
labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} из {1}"},"oj-ojNavigationList":{defaultRootLabel:"Список навигации",hierMenuBtnLabel:"Кнопка вложенного меню",selectedLabel:"выбрано",previousIcon:"Назад",msgFetchingData:"Выборка данных...",msgNoData:"Нет элементов для отображения."},"oj-ojSlider":{noValue:"ojSlider не имеет значения",maxMin:"Максимальное значение должно быть больше минимального",valueRange:"Значение должно быть в диапазоне от минимального до максимального значений",optionNum:"Параметр {option} не является числом",
invalidStep:"Недопустимый шаг. Шаг должен быть > 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Вход во всплывающее окно. Нажмите F6 для перехода между всплывающим окном и связанным элементом управления.",ariaLiveRegionInitialFocusNone:"Всплывающее окно открыто. Нажмите F6 для перехода между всплывающим окном и связанным элементом управления.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Вход во всплывающее окно. Его можно закрыть, перейдя к последней ссылке в окне.",ariaLiveRegionInitialFocusNoneTouch:"Всплывающее окно открыто. Чтобы установить в нем фокус, перейдите к следующей ссылке.",
ariaFocusSkipLink:"Дважды коснитесь, чтобы перейти к открытому всплывающему окну.",ariaCloseSkipLink:"Дважды коснитесь, чтобы закрыть открытое всплывающее окно."},"oj-pullToRefresh":{ariaRefreshLink:"Активируйте ссылку, чтобы обновить содержимое",ariaRefreshingLink:"Выполняется обновление содержимого",ariaRefreshCompleteLink:"Обновление завершено"},"oj-ojIndexer":{indexerOthers:"#",ariaDisabledLabel:"Нет соответствующего заголовка группы",ariaOthersLabel:"число",ariaInBetweenText:"Между {first} и {second}",
ariaKeyboardInstructionText:"Нажмите Enter, чтобы выбрать значение.",ariaTouchInstructionText:"Дважды коснитесь и удерживайте, чтобы перейти в режим жестов, затем перетащите вверх или вниз, чтобы изменить значение."}});